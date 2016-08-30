from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
import json
from .models import User
# Create your views here.

def register(request):
	t = loader.get_template('register.html')
	c = ""
	html = t.render(c)
	return HttpResponse(html)

def submit(request):
	_username = request.GET['username']
	_password = request.GET['password']
	_email = request.GET['email']
	data = User.objects.filter(username = _username)
	if data:
		return HttpResponse('usernamed')
	else:
	
		data = User.objects.filter(email = _email)
		if data:
			return HttpResponse('emailed')
		else:
			data = User(username =_username,password = _password,email = _email)
			data.save();
			return HttpResponse('ok')
	#data = User(password='456',username='dd')
	#data.save()
	#t = loader.get_template('albb.html')
	#return HttpResponse(data.id)
	