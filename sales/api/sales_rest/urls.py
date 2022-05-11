from django.urls import path


from .views import (
    api_sales_person,
    api_customer,
)

urlpatterns = [
    path(
        "salesperson/",
        api_sales_person,
        name="api_sales_person",
    ),
    path(
        "customer/",
        api_customer,
        name="api_customer",
    ),
]