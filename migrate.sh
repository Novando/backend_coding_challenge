source="file:///$(pwd)/$1"
host="localhost"
port="5432"
user=$2
database=$3
state=$4
password=""
sslmode="disable"

read_password() {
  echo -n "Password for $database: "
  read -s password
  echo
}

show_help() {
  echo "Usage: $0 DIR_PATH DB_USER DB_NAME STATE [OPTIONS...]"
  echo
  echo "DIR_PATH"
  echo "  Directory that contain your migrations file, relative from current path"
  echo "DB_USER:"
  echo "  Username for your database"
  echo "DB_NAME:"
  echo "  Name for your selected database"
  echo "STATE:"
  echo "  either 'up' or 'down'"
  echo "OPTIONS:"
  echo "  -h HOST           Your DB host address"
  echo "  -P PORT           Active port for your DB"
  echo "  -s SSLMODE        \"enable\" or \"disable\" SSL"
  echo "  -n STEP_NUMBER    Number f migration that will be executed. either UP or DOWN"
  echo "  -p                Inserting password"
  echo
  exit 1
}
if [ "$#" -lt 4 ]; then
  show_help
fi
while getopts ":h:P:p:s:n" opt; do
  case $opt in
    h)
      host=$OPTARG
      ;;
    P)
      port=$OPTARG
      ;;
    p)
      read_password
      if [ password != "" ]; then
        user="$1:$password"
      fi
      ;;
    s)
      sslmode="enable"
      ;;
    n)
      state="$3 $OPTARG"
      ;;
    \?)
      show_help
      ;;
  esac
done
conn_url="postgres://$user@$host:$port/$database?sslmode=$sslmode"
migrate -source $source -database $conn_url $state