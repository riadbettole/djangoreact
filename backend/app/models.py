from django.db import models

# Create your models here.

class Clothes:
    name = models.CharField(max_length=30)
    prompt = models.CharField(max_length=200)