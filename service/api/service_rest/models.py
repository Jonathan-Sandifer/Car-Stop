from django.db import models

# class Vin(models.Model):
#     import_href = models.CharField(max_length=200, unique=True)
#     vin = models.CharField(max_length=17, unique=True)

class Technician(models.Model):
    name = models.CharField(max_length=200, unique=True)
    employee_number = models.CharField(max_length=50, unique=True)

# class Service(models.Model):
#     customer_name = models.CharField(max_length=100)
#     date = models.DateField()
#     time = models.TimeField()
#     reason = models.CharField(max_length=100)
    # technician = models.ForeignKey(
    #     Technician,
    #     related_name="technician",
    #     on_delete=models.PROTECT,
    # )    
    # vin = models.ForeignKey(
    #     Vin,
    #     related_name="vin",
    #     on_delete=models.PROTECT,
    # )

# class ServiceHistory(models.Model):
#     vin = models.ForeignKey(
#     VinVO,
#     related_name="vin",
#     on_delete=models.PROTECT,
#     )
#     technician = models.ForeignKey(
#         Technician,
#         related_name="technician",
#         on_delete=models.PROTECT,
#     )
#     service = models.ForeignKey(
#         Service,
#         related_name="service",
#         on_delete=models.PROTECT,
#     )
