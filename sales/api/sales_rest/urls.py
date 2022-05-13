from django.urls import path


from .views import (
    api_sales_person,
    api_customer,
    api_sales_record,
    api_show_sale_history
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
    path(
        "sales_record/",
        api_sales_record,
        name="api_sales_record",
    ),
    path(
        "sale_history/<int:sales_person>/",
        api_show_sale_history,
        name="api_show_sale_history",
    ),
]
