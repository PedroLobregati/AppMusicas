import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Musica from 'src/app/model/entities/Musica';

@Component({
  selector: 'app-music-form',
  templateUrl: './music-form.component.html',
  styleUrls: ['./music-form.component.scss'],
})
export class MusicFormComponent implements OnInit {
  @Input() musica: Musica;
  @Output() formSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  formEditar: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formEditar = this.formBuilder.group({
      nome: [this.musica.nome, [Validators.required]],
      banda: [this.musica.banda, [Validators.required]],
      anoLancamento: [this.musica.anoLancamento, [Validators.required, Validators.max(2024), Validators.min(1500)]],
      album: [this.musica.album, [Validators.required]],
      genero: [this.musica.genero, [Validators.required]],
    });
  }

  onSubmit() {
    this.formSubmit.emit(this.formEditar);
  }
}
