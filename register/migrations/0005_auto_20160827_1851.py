# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-08-27 10:51
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0004_auto_20160827_1838'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='userId',
            new_name='username',
        ),
    ]
