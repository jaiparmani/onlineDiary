from django.contrib import admin
from .models import Post, TypesOfPosts
# Register your models here.

admin.site.register(Post)
admin.site.register(TypesOfPosts)
