from rest_framework import serializers
from blogapis.models import Post,TypesOfPosts

class PostSerializer(serializers.ModelSerializer):
    class Meta:
    
        model = Post
        fields = '__all__'

class TypesOfPostsSerializer(serializers.ModelSerializer):
    class Meta:
    
        model = TypesOfPosts
        fields = '__all__'