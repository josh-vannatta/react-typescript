import * as _ from "lodash";
import { authorData } from './authorData';

let authors = authorData.authors;

export default class AuthorApi  {

	static getAllAuthors() {
		return this.clone(authors);
	}

	static getAuthorById(id): Object {
		let author = _.find(authors, {id: id});
		return this.clone(author);
	}

	static saveAuthor(author): Object {
		if (author.id) {
			let existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id}));
			authors.splice(existingAuthorIndex, 1, author);
		} else {
			author.id = this.generateId(author);
			authors.push(author);
		}

		return this.clone(author);
	}

	static deleteAuthor(id): void {
		_.remove(authors, { id: id});
	}

	private static generateId(author): string {
		return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
	}

	private static clone(item): string {
		return JSON.parse(JSON.stringify(item));
	}

}
