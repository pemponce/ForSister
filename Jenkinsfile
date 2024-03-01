pipeline {

	agent any
	tools {
		gradle 'GRADLE_HOME'
	}
	stages {
		stage("deploy") {
			steps {
				sh 'cd yml && docker-compose up -d'
			}
		}
	}
}
