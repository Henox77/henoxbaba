// @ts-check
/**
 * @typedef {{
 * category: string;
 * total: number;
 * }} Category
 */

/**
 * @typedef {{
 * dark: string;
 * light: string;
 * }} ThemeOptions
 */

/**
 * @typedef {{
 * id?: number;
 * title: string;
 * category: Category | Category[];
 * route: string | ThemeOptions;
 * wordmark?: string | ThemeOptions;
 * brandUrl?: string;
 * url: string;
 * }} SVGData
 */

/**
 * @typedef {Object} LanyardData
 * @property {Spotify=} spotify
 * @property {boolean} listening_to_spotify
 * @property {DiscordUser} discord_user
 * @property {"online" | "idle" | "dnd" | "offline"} discord_status
 * @property {Kv=} kv
 * @property {Activity[]} activities
 * @property {boolean} active_on_discord_web
 * @property {boolean} active_on_discord_mobile
 * @property {boolean} active_on_discord_desktop
 */

/**
 * @typedef {Object.<string, string>} Kv
 */

/**
 * @typedef {Object} Spotify
 * @property {string} track_id
 * @property {Timestamps} timestamps
 * @property {string} song
 * @property {string} artist
 * @property {string} album_art_url
 * @property {string} album
 */

/**
 * @typedef {Object} Timestamps
 * @property {number} start
 * @property {number=} end
 */

/**
 * @typedef {Object} Activity
 * @property {number} type
 * @property {string} state
 * @property {string} name
 * @property {string} id
 * @property {number=} flags
 * @property {Emoji=} emoji
 * @property {number} created_at
 * @property {string=} application_id
 * @property {Timestamps=} timestamps
 * @property {string=} sync_id
 * @property {string=} session_id
 * @property {Party=} party
 * @property {string=} details
 * @property {string[]=} buttons
 * @property {Assets=} assets
 */

/**
 * @typedef {Object} Party
 * @property {string} id
 * @property {[number, number]=} size
 */

/**
 * @typedef {Object} Assets
 * @property {string} small_text
 * @property {string} small_image
 * @property {string} large_text
 * @property {string} large_image
 */

/**
 * @typedef {Object} Emoji
 * @property {string} name
 * @property {string=} id
 * @property {boolean=} animated
 */

/**
 * @typedef {Object} DiscordUser
 * @property {string} username
 * @property {string | null} global_name
 * @property {number} public_flags
 * @property {string} id
 * @property {string} discriminator
 * @property {boolean} bot
 * @property {string} avatar
 * @property {{ sku_id: string; asset: string; expires_at: string; }} avatar_decoration_data
 * @property {string} avatar_decoration_data.sku_id
 * @property {string} avatar_decoration_data.asset
 * @property {number} avatar_decoration_data.expires_at
 */

/**
 * @typedef {{
 * success: boolean;
 * data: LanyardData;
 * }} LanyardResponse
 */

/**
 * @typedef {Object} GitHubUser
 * @property {string} login
 * @property {number} id
 * @property {string} node_id
 * @property {string} avatar_url
 * @property {string} gravatar_id
 * @property {string} url
 * @property {string} html_url
 * @property {string} followers_url
 * @property {string} following_url
 * @property {string} gists_url
 * @property {string} starred_url
 * @property {string} subscriptions_url
 * @property {string} organizations_url
 * @property {string} repos_url
 * @property {string} events_url
 * @property {string} received_events_url
 * @property {string} type
 * @property {string} user_view_type
 * @property {boolean} site_admin
 * @property {string} name
 * @property {string} company
 * @property {string} blog
 * @property {string} location
 * @property {string | null} email
 * @property {string | null} hireable
 * @property {string} bio
 * @property {string} twitter_username
 * @property {number} public_repos
 * @property {number} public_gists
 * @property {number} followers
 * @property {number} following
 * @property {string} created_at
 * @property {string} updated_at
 */

/**
 * @typedef {Object} GitHubRepository
 * @property {number} id
 * @property {string} node_id
 * @property {string} name
 * @property {string} full_name
 * @property {boolean} private
 * @property {GitHubUser} owner
 * @property {string} html_url
 * @property {string} description
 * @property {boolean} fork
 * @property {string} url
 * @property {string} forks_url
 * @property {string} keys_url
 * @property {string} collaborators_url
 * @property {string} teams_url
 * @property {string} hooks_url
 * @property {string} issue_events_url
 * @property {string} events_url
 * @property {string} assignees_url
 * @property {string} branches_url
 * @property {string} tags_url
 * @property {string} blobs_url
 * @property {string} git_tags_url
 * @property {string} git_refs_url
 * @property {string} trees_url
 * @property {string} statuses_url
 * @property {string} languages_url
 * @property {string} stargazers_url
 * @property {string} contributors_url
 * @property {string} subscribers_url
 * @property {string} subscription_url
 * @property {string} commits_url
 * @property {string} git_commits_url
 * @property {string} comments_url
 * @property {string} issue_comment_url
 * @property {string} contents_url
 * @property {string} compare_url
 * @property {string} merges_url
 * @property {string} archive_url
 * @property {string} downloads_url
 * @property {string} issues_url
 * @property {string} pulls_url
 * @property {string} milestones_url
 * @property {string} notifications_url
 * @property {string} labels_url
 * @property {string} releases_url
 * @property {string} deployments_url
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} pushed_at
 * @property {string} git_url
 * @property {string} ssh_url
 * @property {string} clone_url
 * @property {string} svn_url
 * @property {string} homepage
 * @property {number} size
 * @property {number} stargazers_count
 * @property {number} watchers_count
 * @property {string} language
 * @property {boolean} has_issues
 * @property {boolean} has_projects
 * @property {boolean} has_downloads
 * @property {boolean} has_wiki
 * @property {boolean} has_pages
 * @property {boolean} has_discussions
 * @property {number} forks_count
 * @property {string | null} mirror_url
 * @property {boolean} archived
 * @property {boolean} disabled
 * @property {number} open_issues_count
 * @property {string | null} license
 * @property {boolean} allow_forking
 * @property {boolean} is_template
 * @property {boolean} web_commit_signoff_required
 * @property {string[]} topics
 * @property {string} visibility
 * @property {number} forks
 * @property {number} open_issues
 * @property {number} watchers
 * @property {string} default_branch
 */

export { };

