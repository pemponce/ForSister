pipeline {

	agent any
	tools {
		gradle 'GRADLE_HOME'
	}
	stages {
		stage("deploy") {
			steps {
				sh 'docker-compose up -d'
			}
		}
	}
}
