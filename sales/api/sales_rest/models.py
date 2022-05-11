from django.db import models

# Create your models here.


class VinVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17, unique=True)


class SalesPerson(models.Model):
    name = models.CharField(max_length=100, unique=True)
    employee_id_number = models.PositiveBigIntegerField()


class Customer(models.Model):
    name = models.CharField(max_length=100, unique=True)
    address = models.CharField(max_length=250, unique=True)
    phone_number = models.PositiveBigIntegerField()


class SalesRecord(models.Model):
    price = models.PositiveBigIntegerField()
    availability = models.BooleanField()
    customer = models.ForeignKey(
        Customer,
        related_name="customer",
        on_delete=models.PROTECT,
    )
    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales_person",
        on_delete=models.PROTECT,
    )
    Vin_number = models.ForeignKey(
        VinVO,
        related_name="vin_number",
        on_delete=models.CASCADE,
    )
