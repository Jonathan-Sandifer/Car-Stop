import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

# Import models from sales_rest, here.
# from sales_rest.models import Something
from sales_rest.models import VinVO

def get_vins():
    response = requests.get(
        "http://inventory-api:8000/api/automobiles/")  
    content = json.loads(response.content)
    # print("content:", content["autos"])
    # print("content2:", content["autos"][0])
    # print("content3:", content["autos"][1])
    for vin in content["autos"]:
        VinVO.objects.update_or_create(
            import_href=vin["href"],
            vin=vin["vin"]
            # defaults={
            #     "vin": vin["vin"],
            # },
        )
   

def poll():
    while True:
        print('Sales poller polling for data')
        try:
            # Write your polling logic, here
            get_vins()

        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(10)


if __name__ == "__main__":
    poll()
