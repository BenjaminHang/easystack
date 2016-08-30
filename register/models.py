from __future__ import unicode_literals

from django.db import models

# Create your models here.
class User(models.Model):
	username = models.CharField('username',max_length=40)
	password = models.CharField('password',max_length=40)
	email = models.CharField('email',max_length=120,default='null')