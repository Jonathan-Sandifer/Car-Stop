from django.db import models

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return f"{self.name}"


class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return f"{self.name}"

class Service(models.Model):
    vin = models.CharField(max_length=50, null=True)
    customer = models.CharField(max_length=50, null=True)
    date_time = models.DateTimeField(null=True)
    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.PROTECT,
        null=True,
    )
    reason = models.CharField(max_length=100)
    is_vip = models.BooleanField(default=False)
    is_finished = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.reason} for {self.customer}"

