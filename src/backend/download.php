<?php
function file_force_download($file) {
    if (file_exists($file)) {
        // ���������� ����� ������ PHP, ����� �������� ������������ ������ ���������� ��� ������
        // ���� ����� �� ������� ���� ����� �������� � ������ ���������!
        if (ob_get_level()) {
            ob_end_clean();
        }
        // ���������� ������� �������� ���� ���������� �����
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header("Content-Disposition: attachment; filename=$file");
        // ������ ���� � ���������� ��� ������������
        readfile($file);
        exit;
    }
}
file_force_download('fordownload/new.jpg');