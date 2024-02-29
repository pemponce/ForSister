pipeline {
	
	agent any

	stages {
		stage("build") {
			steps {
				echo 'building the app.'
				sh 'cd wedd && gradle clean build'
				sh 'cd ../front && npm install && npm run build'
			}
		}

		stage("deploy") {
			steps {
				sh 'docker-compose up -d'
			}
		}
	}
}
