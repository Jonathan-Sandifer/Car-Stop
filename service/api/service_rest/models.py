from django.db import models

class Technician(models.Model):
    technician = models.CharField(max_length=200, unique=True)
    employee_number = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.technician

class Service(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    customer_name = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    technician = models.CharField(max_length=100)
    reason = models.CharField(max_length=100)

    def __str__(self):
        return self.customer_name