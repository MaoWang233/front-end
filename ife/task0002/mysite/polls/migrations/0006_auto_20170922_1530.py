# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-22 07:30
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0005_auto_20170922_1519'),
    ]

    operations = [
        migrations.AlterField(
            model_name='choice',
            name='user',
            field=models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL),
        ),
    ]
