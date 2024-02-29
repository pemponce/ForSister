pipeline {
	
	agent any

	stages {
		stage("build") {
			when {
				expression {
					BRANCH_NAME == 'main' || BRANCH_NAME == 'develop'
				}
			}
			steps {
				echo 'building the app.'
			}
		}

		stage("test") {
			steps {
				echo 'testing the app..'
			}
		}

		stage("deploy") {
			steps {
				echo 'deploying the app...'
			}
		}
	}
}
