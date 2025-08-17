from django.db import models
from ckeditor.fields import RichTextField 

class TimeStamp(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        abstract=True

# Create your models here.
class Category(TimeStamp):
    cover = models.ImageField(upload_to='category_cover')
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title
class Course(TimeStamp):
    title = models.CharField(max_length=255)
    is_free = models.BooleanField(default=0)
    price = models.FloatField(default=0.00)
    description = RichTextField()
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True, related_name="courses")
    cover = models.ImageField(upload_to='courses_cover')
    hours = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True) 

    def __str__(self):
        return self.title

    class Meta:
        ordering = ("-created_at", )