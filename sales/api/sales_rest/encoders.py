from common.json import ModelEncoder

from .models import SalesPerson, Customer


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
