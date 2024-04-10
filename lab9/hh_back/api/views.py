from django.core.serializers import serialize
from django.http.response import JsonResponse
from django.forms.models import model_to_dict

from api.models import Company, Vacancy


# Create your views here.
def get_companies(request):
	try:
		companies = Company.objects.all()

		dict_list = [model_to_dict(c) for c in companies]
		return JsonResponse(dict_list, safe=False)
	except:
		return JsonResponse(status=404)


def get_company(request, id=None):
	try:
		company = Company.objects.get(id=id)

		dict = model_to_dict(company)
		return JsonResponse(dict, safe=True)
	except:
		return JsonResponse(status=404)


def get_vacancies_for_company(request, id=None):
	try:
		vacancies = Vacancy.objects.filter(company_id=id)

		dict_list = [model_to_dict(v) for v in vacancies]
		return JsonResponse(dict_list, safe=False)
	except:
		return JsonResponse(status=404)


def get_vacancies(request, id=None):
	try:
		vacancies = Vacancy.objects.all()

		dict_list = [model_to_dict(v) for v in vacancies]
		return JsonResponse(dict_list, safe=False)
	except:
		return JsonResponse(status=404)


def get_vacancy(request, id=None):
	try:
		vacancy = Vacancy.objects.get(id=id)

		dict = model_to_dict(vacancy)
		return JsonResponse(dict, safe=True)
	except:
		return JsonResponse(status=404)


def get_top_ten_vacancies(request):
	try:
		vacancies = Vacancy.objects.all().order_by('-salary')[0:10]

		dict_list = [model_to_dict(v) for v in vacancies]
		return JsonResponse(dict_list, safe=False)
	except:
		return JsonResponse(status=404)
