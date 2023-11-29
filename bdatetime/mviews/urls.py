from django.urls import path
from .views import hello,date_time,time

urlpatterns=[
    path('hello/', hello,name="hello"),
    path('date/', date_time, name="name"),
    path('time/',time,name="val")    
]