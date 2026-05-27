import json
import os

try:
    with open('testsprite_tests/tmp/test_results.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Structure of test_results.json might be different
    # Let's see if we can find failed tests
    failures = []
    tests = []
    
    if isinstance(data, list):
        tests = data
    elif isinstance(data, dict):
        if 'tests' in data:
            tests = data['tests']
        elif 'results' in data:
            tests = data['results']
        else:
            tests = list(data.values())

    for t in tests:
        if isinstance(t, dict):
            status = t.get('status')
            if status in ['failed', 'error']:
                failures.append(t)
            elif 'result' in t and isinstance(t['result'], dict) and t['result'].get('status') in ['failed', 'error']:
                failures.append(t)
            elif 'execution_result' in t and isinstance(t['execution_result'], dict) and t['execution_result'].get('status') in ['failed', 'error']:
                failures.append(t)

    print(f"Total failures: {len(failures)}")
    for f in failures:
        print(f"\n---")
        print(f"Test ID: {f.get('test_id', f.get('id', f.get('testId')))}")
        print(f"Name: {f.get('test_name', f.get('name', f.get('title')))}")
        err = f.get('error', f.get('errorMessage'))
        if not err and 'execution_result' in f:
            err = f['execution_result'].get('error')
        if not err and 'result' in f:
            err = f['result'].get('error')
        print(f"Error: {err}")
        
except Exception as e:
    print(e)
