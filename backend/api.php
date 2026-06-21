<?php
require_once 'config.php';

$request_method = $_SERVER["REQUEST_METHOD"];
$database = new Database();
$db = $database->getConnection();

switch($request_method) {
    case 'GET':
        if(!empty($_GET["action"])) {
            $action = $_GET["action"];
            switch($action) {
                case "about":
                    getAbout($db);
                    break;
                case "techstack":
                    getTechStack($db);
                    break;
                case "projects":
                    getProjects($db);
                    break;
                case "certifications":
                    getCertifications($db);
                    break;
                default:
                    header("HTTP/1.0 404 Not Found");
                    echo json_encode(array("message" => "Action not found"));
            }
        } else {
            getAllData($db);
        }
        break;
    default:
        header("HTTP/1.0 405 Method Not Allowed");
        echo json_encode(array("message" => "Method not allowed"));
        break;
}

function getAllData($db) {
    $data = array(
        "about" => getAboutData(),
        "techstack" => getTechStackData(),
        "projects" => getProjectsData(),
        "certifications" => getCertificationsData()
    );
    echo json_encode($data);
}

function getAbout($db) {
    echo json_encode(getAboutData());
}

function getAboutData() {
    return array(
        "name" => "Rina Jean Mislang",
        "title" => "Fullstack Developer",
        "description" => "I'm Rina Jean Mislang, passionate fullstack developer dedicated to creating amazing web and mobile applications."
    );
}

function getTechStack($db) {
    echo json_encode(getTechStackData());
}

function getTechStackData() {
    return array(
        "frontend" => array("React", "React Native", "JavaScript", "Tailwind CSS", "Bootstrap"),
        "backend" => array("Node.js", "Laravel", "PHP", "MySQL"),
        "database" => array("Supabase"),
        "uiux" => array("Figma", "Canva", "WordPress"),
        "tools" => array("Figma", "Canva", "Trae.ai", "Antigravity", "Cursor", "Visual Studio Code", "Codex")
    );
}

function getProjects($db) {
    echo json_encode(getProjectsData());
}

function getProjectsData() {
    return array(
        "mobile" => array(
            array("name" => "LERA", "description" => "Mobile application"),
            array("name" => "hilkvisual", "description" => "Mobile application")
        ),
        "web" => array(
            array("name" => "clarem", "description" => "Web application"),
            array("name" => "cames and co", "description" => "Web application"),
            array("name" => "dainty m'lang cafe", "description" => "Web application")
        )
    );
}

function getCertifications($db) {
    echo json_encode(getCertificationsData());
}

function getCertificationsData() {
    return array();
}
?>