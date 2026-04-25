pipeline {
    agent {
        label "formula-one"
    }
    stages {
        stage ("build") {
            steps {
                echo "building the application..."
                sh "/home/pablo/.nvm/versions/node/v20.17.0/bin/node -v"
                sh "ls -la"
            }
        }
        stage ("Build image") {
            steps {
                echo "Creating image to project..."
                sh "docker images"
                sh "docker build -t formulaone:v1 ."
                sh "docker images | grepe formulaone"

            }
        }
    }
}