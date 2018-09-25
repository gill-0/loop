import json
import pprint

#{"type":"Feature","geometry":{"type":"LineString","coordinates":[[40.44066,-79.9959],[40.44074,-79.99584]
def main():
    with open('data/route.json', 'r') as f:
        data = json.load(f)
    data['geometry']['coordinates'] = [[coords[1], coords[0]] for coords in data['geometry']['coordinates']]

    with open('data/pitt_route.json', 'w') as dump_file:
        json.dump(data, dump_file)
    


if __name__ == '__main__':
    main()