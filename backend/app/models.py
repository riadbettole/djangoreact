from django.db import models

# Create your models here.

class Clothes(models.Model):
    name = models.CharField(max_length=30)
    prompt = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images/')
