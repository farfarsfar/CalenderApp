from django.db import models
from django.utils import timezone

# Create your models here.
class Event(models.Model):
    Title = models.CharField(max_length=240)
    Start_Time = models.DateTimeField(default=timezone.now)
    End_Time = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.Title

