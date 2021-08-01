function get_rand_num(num) {
    return Math.floor(Math.random() * num)
}

function get_gh_path(gh_name, gh_repo, gh_path, file_name) {
    return gh_name + '/' + gh_repo + gh_path + file_name
}

function get_jsd_url(gh_name, gh_repo, gh_path, file_name) {
    var prefix = 'https://cdn.jsdelivr.net/gh/';
    return prefix + get_gh_path(gh_name, gh_repo, gh_path, file_name)
}

function get_rand_jsd_pic(gh_name, gh_repo, gh_path, pic_num, suffix){
    return get_jsd_url(gh_name, gh_repo, gh_path, get_rand_num(pic_num) + suffix)
}