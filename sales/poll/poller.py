from sales_rest.models import VinVO
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


def get_vins():
    response = requests.get(
        "http://inventory-api:8000/api/automobiles/")
    content = json.loads(response.content)

    for vin in content["autos"]:
        VinVO.objects.update_or_create(
            import_href=vin["href"],
            vin=vin["vin"]

        )


def poll():
    while True:
        print('Sales poller polling for data')
        try:
            get_vins()

        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(10)


if __name__ == "__main__":
    poll()
