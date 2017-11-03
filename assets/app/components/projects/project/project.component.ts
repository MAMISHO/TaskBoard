import { Component }	from '@angular/core';
import { Project }	    from '../models/project.model';
// import { Http } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 	'project-form',
  styleUrls: 	['app/components/projects/project/project.component.css'],
  templateUrl: 	'app/components/projects/project/project.component.html'
})
