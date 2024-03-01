pipeline {
    agent any
    stages {
    	stage('Login to Docker Hub') {
            steps {
                script {
                    sh 'docker login'
                }
            }
        }
        stage('Build Docker Images') {
            agent {
                docker {
                    image 'jenkins-agent-with-compose'
                    args '-v /var/run/docker.sock:/var/run/docker.sock'
                }
            }
            steps {
                sh 'docker-compose build'
            }
        }
        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }
        stage('Deploy with Docker Compose') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
