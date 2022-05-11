from django.db import models

# Create your models here.


class SalesPerson(models.Model):
    name = models.CharField(max_length=100, unique=True)
    employee_id_number = models.PositiveBigIntegerField()


class Customer(models.Model):
    name = models.CharField(max_length=100, unique=True)
    address = models.CharField(max_length=250, unique=True)
    phone_number = models.PositiveBigIntegerField()
