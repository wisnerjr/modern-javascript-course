class Github {
    constructor() {
        this.client_id = 'bb47034918a3eb3008ef';
        this.client_secret = '1258b49714104ef4dcebe8435b7de32fec43ed44';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const respoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await respoResponse.json();
        return {
            profile,
            repos
        }
    }


}