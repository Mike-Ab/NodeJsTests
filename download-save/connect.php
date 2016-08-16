<?php
if (!class_exists ('dbConnect')) {
class dbConnect {
	protected $db_host = 'localhost';
//	protected $db_username = 'gqaustra_itAdmin';
//	protected $db_pass = 'GQ@2013!';
protected $db_username = 'root';
protected $db_pass = '';
	protected $db_name ;
	protected $EstablishConnection = false;
	public $connected = false;

  //  function __construct ($database_name = 'gqaustra_crm_op')
	function __construct ($database_name = 'gq_facilitator_performance')
    {
        $this->db_name = $database_name;
        $this->connect($database_name);
    }


    public function EstablishCon($a,$b,$c, $d){
        $this->EstablishConnection = mysqli_connect("$a", "$b", "$c", "$d");
	if (mysqli_connect_errno())  {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
        }
	return $this->EstablishConnection;
    }

    public function connect ($database = false){
        if ($this->connected) return $this->connected;
	if ($database === false) $database = $this->db_name;
	$this->connected = $this->EstablishCon($this->db_host,$this->db_username,$this->db_pass, $database);
	if ($this->connected){
            return $this->connected;
	}else{
	    return false;
	}
    }
    public function __destruct() {
        mysqli_close($this->connected);
        $this->connected = false;
    }

    public function DC(){
        mysqli_close($this->connected);
	$this->connected = false;
    }


    public function sanitise($string, $database = false){
        $con = $this->getDbConnection($database);
	$return = mysqli_real_escape_string($con, $string);
	return $return;
    }

    /**
     * Execute an SQL Query
     * @param $sql
     * @param $error_message
     * @param $database
     */

    public function execute ( $sql, $error_message = '', $database = false )
    {
        $con = $this->getDbConnection($database);
        $qry = mysqli_query ( $con, $sql )  or die ( $error_message. ' : '.mysqli_error( $con ) );
        return $qry;
    }


    /**
     * Execute an SQL Query
     * @param $sql
     * @param $error_message
     * @param $database
     */

    public function executeReturnId ( $sql, $error_message = '', $database = false )
    {
        $con = $this->getDbConnection($database);
        $qry = mysqli_query ( $con, $sql )  or die ( $error_message. ' : '.mysqli_error( $con ) );
        return mysqli_insert_id( $con );
    }


    /**
     * Get associated array of an SQL query result
     * @param $sql_resource
    */
    public function get_assoc ( $sql_resource , $single_result = false )
    {
        if ( mysqli_num_rows($sql_resource) != 0){
	if ($single_result) return ( mysqli_fetch_assoc( $sql_resource ) );
	while ( $x = mysqli_fetch_assoc( $sql_resource ) ){
                $array[] = $x;
            }
            return $array;
	}
        else return NULL;
    }


    /**
     *
     * @param String  $sql
     * @param Bool $single_result
     * @param String $error_message
     * @param String $database
     * @return Null Or Array
     */
    public function fetch_result ( $sql, $single_result = false, $error_message = '' , $database = false)
    {
        return $this->get_assoc($this->execute($sql, $error_message, $database), $single_result);
    }

    /**
     * Checks the need for a new connection object
     * @param string $database
     * @return Obj $con
     */
    private function getDbConnection ($database = FALSE)
    {
         if ($database) {
            if ($database != $this->db_name) {
                $con = $this->connect($database);
            }
        }else {
            $con = $this->connected;
        }
        return $con;
    }

    /**
     *
     * @param string $setting the required system setting
     * @return string Returns the system setting value
     */
    public function selectedSystemSetting( $setting )
    {
	$array = $this->fetch_result ("SELECT value FROM ds_settings WHERE setting LIKE '$setting'", true , 'Error finding new portfolio owner');
	return ($array['value']);
    }
} // end of class
}
