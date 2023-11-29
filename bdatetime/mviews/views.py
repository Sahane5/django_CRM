from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime

# Create your views here.
def hello(request):
    return HttpResponse("Hello Ahmed")

def date_time(request):
    now=datetime.now()
    return HttpResponse("The date time is "+ str(now))

def time(request):
    current= datetime.now()
    return HttpResponse("The time is "+str(current))

