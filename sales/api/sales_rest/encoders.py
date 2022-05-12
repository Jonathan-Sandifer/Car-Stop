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
        "sales_person",
        "Vin_number",
        "customer",
        "price",
        "id"
    ]
    encoders = {
        "sales_person": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
        "Vin_number": VinVoEncoder()
    }
