from django.db import models
import datetime
from django.contrib.auth.models import AbstractUser
# Create your models here.


class Post(models.Model):
    subject =   models.ForeignKey("blogapis.TypesOfPosts", on_delete=models.CASCADE)
    text = models.CharField(max_length = 1000)
    timestamp = models.DateTimeField(default = datetime.datetime.now())

    def __str__(self):
        return self.subject.subject + " :: " + self.text
    
class TypesOfPosts(models.Model):
    subject = models.CharField(max_length = 1000)
    def __str__(self):
        return self.subject

class User(Abs)