from django.db import models
from courses.models import TimeStamp 
from ckeditor.fields import RichTextField 
# Create your models here.

class Expert(TimeStamp):
    name = models.CharField(max_length=150)
    image = models.ImageField(upload_to='experts')
    job_title = models.CharField(max_length=100)
    facebook_url = models.URLField(null=True, blank=True)
    instagram_url = models.URLField(null=True, blank=True)
    paintrest_url = models.URLField(null=True, blank=True)
    twitter_url = models.URLField(null=True, blank=True)
    
    def __str__(self):
        return f"{self.name} - {self.job_title}"
    
    class Meta:
        ordering = ("-created_at",)
    

class StudnetsReview(TimeStamp):
    name = models.CharField(max_length=150)
    description = models.TextField()
    job_title = models.CharField(max_length=100)
    
    def __str__(self):
        return f"Review from {self.name}"
    
    class Meta:
        ordering = ("-created_at",)



class New(TimeStamp):
    title = models.CharField(max_length=200)
    description = RichTextField()
    image = models.ImageField(upload_to='News')
    category = models.CharField(max_length=50)
  
    def __str__(self):
        return f"News -  {self.title}"
    
    class Meta:
        ordering = ("-created_at",)

