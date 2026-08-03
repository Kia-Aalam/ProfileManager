# ProfileManager

A Django-based user profile management application.

## Features

- Custom authentication system with Sign up, Sign in and Logout functionality
- User profile editing
- Profile image upload
- Update username, email, specialty and bio
- Responsive user interface

## Technologies

- Python
- Django
- HTML
- CSS
- Bootstrap
- JavaScript
- SQLite

## Installation

Clone the repository:

```bash
git clone https://github.com/Kia-Aalam/ProfileManager.git
```

Go to the project directory:

```bash
cd ProfileManager
```

Create a virtual environment:

```bash
python -m venv .venv
```

Activate the virtual environment:

```bash
.venv\Scripts\activate
```

Install required packages:

```bash
pip install -r requirements.txt
```

Apply database migrations:

```bash
python manage.py migrate
```

Create a superuser (optional):

```bash
python manage.py createsuperuser
```

Run the development server:

```bash
python manage.py runserver
```

Open your browser and visit:

```
http://127.0.0.1:8000/
```

## Author

Kia Aalam