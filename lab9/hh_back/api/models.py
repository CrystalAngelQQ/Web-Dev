from django.db import models

from django.core.serializers import serialize


# Create your models here.
class Company(models.Model):
	name = models.CharField(max_length=255)
	description = models.TextField()
	city = models.CharField(max_length=100)
	address = models.TextField()

	def __str__(self):
		return self.name


class Vacancy(models.Model):
	name = models.CharField(max_length=255)
	description = models.TextField()
	salary = models.FloatField()
	company_id = models.ForeignKey(
		Company, on_delete=models.CASCADE
	)

	def __str__(self):
		return self.name
