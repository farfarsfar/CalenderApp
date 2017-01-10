from django.db import models

# Create your models here.
class Event(models.Model):
    Title = models.CharField(max_length=120)

