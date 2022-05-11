from common.json import ModelEncoder

from .models import SalesPerson, Customer, SalesRecord, VinVO


class VinVoEncoder(ModelEncoder):
    model = VinVO
    properties = [
        "import_href",
        "vin",
        "availability",
    ]


class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "name",
        "employee_id_number",
    ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "name",
        "address",
        "phone_number",
    ]


class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "price",
    ]
    encoders = {
        "customer": CustomerEncoder(),
        "sales_person": SalesPersonEncoder(),
        "vin_number": VinVoEncoder()
    }
