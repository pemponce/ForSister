pipeline {
    agent {
        docker {
            image 'jenkins-agent-with-compose'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    stages {
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