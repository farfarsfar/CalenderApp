# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-11 10:44
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0003_event_starttime'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='StartTime',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
