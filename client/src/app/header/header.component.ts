import { Component, OnInit } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { getParameterByName } from '../shared/misc/utils'

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})

export class HeaderComponent implements OnInit {
  searchValue = ''

  constructor (private router: Router) {}

  ngOnInit () {
    this.router.events
        .filter(e => e instanceof NavigationEnd)
        .map(() => getParameterByName('search', window.location.href))
        .filter(searchQuery => !!searchQuery)
        .subscribe(searchQuery => this.searchValue = searchQuery)
  }

  doSearch () {
    this.router.navigate([ '/videos', 'search' ], {
      queryParams: { search: this.searchValue }
    })
  }
}
