# Use an official Python runtime as a parent image
FROM python:3.9

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy and install requirements
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Django project files into the container
COPY . .

# Expose port 8000 (or the port your Django app is running on)
EXPOSE 8000

# Define the command to run your Django app
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "BACKEND.wsgi:application"]
